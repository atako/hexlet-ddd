import cinemaManager from '../../src/index';

describe('MoneyService', () => {
  let services;
  let film;
  let cinemaHall;
  let filmScreening;
  let user;
  let repositories;

  beforeEach(() => {
    const app = cinemaManager();
    services = app.services;
    repositories = app.repositories;
    const email = 'etst@email.com';
    [user] = services.UserService.createUser(email);
    [film] = services.CinemaService.createFilm('first glance', 100);
    [cinemaHall] = services.CinemaService.createCinemaHall('first', 5, 5);
    services.MoneyService.createPrice(cinemaHall.id, 100);
    [filmScreening] = services.MoneyService
      .createFilmScreening(film.id, cinemaHall.id, new Date());
    services.MoneyService.createPrice(cinemaHall.id, 100);
  });

  it('createPrice', () => {
    const [price] = services.MoneyService.createPrice(cinemaHall.id, 200);
    const expected = {
      value: 200,
    };

    expect(price).toMatchObject(expected);
  });

  it('createFilmScreening (errors)', () => {
    const f = () => services.MoneyService.createFilmScreening();
    expect(f).toThrow();
  });

  it('createFilmScreening', () => {
    const time = new Date();
    const [localFilmScreening] = services.MoneyService
      .createFilmScreening(film.id, cinemaHall.id, time);

    const expected = {
      // film,
      // cinemaHall,
      time,
    };
    expect(localFilmScreening).toMatchObject(expected);
    const fs = repositories.FilmScreening.find(localFilmScreening.id);
    expect(localFilmScreening).toMatchObject(fs);
  });

  it('buyTicket', () => {
    const place = { row: 5, col: 3 };
    const [ticket] = services.MoneyService.buyTicket(user.id, filmScreening.id, place);
    const capital = repositories.CapitalTransaction.findBy({ ticket });
    const ticketExpected = {
      place,
    };

    expect(ticket).toMatchObject(ticketExpected);

    const capitalExpected = {
      ticket,
    };
    expect(capital).toMatchObject(capitalExpected);
  });

  it('buyTicket (errors)', () => {
    const f = () => services.MoneyService.buyTicket();

    expect(f).toThrow();
  });

  it('buyTicket with double reservation', () => {
    const place = { row: 5, col: 3 };
    services.MoneyService.buyTicket(user.id, filmScreening.id, place);
    const [, errors] = services.MoneyService.buyTicket(user.id, filmScreening.id, place);
    const expected = { filmScreening: [
      'Film screening already exists',
    ] };
    expect(errors).toMatchObject(expected);
  });
});
