import { StormGlass } from '@src/clients/stormGlass';
import axios from "axios";
import stormGlassWeather3HoursFixture from '@test/fixtures/stormGlass_weather_3_hours.json';
import stormGlassNormalized3HoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios')

describe('StormGlass client', () => {
  it('should return the normalize forecast from StormGlass service', async () => {
    
    const lat = -33;
    const lng = 151;

    axios.get = jest.fn().mockResolvedValue(stormGlassWeather3HoursFixture)

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat,lng)

    expect(response).toEqual(stormGlassNormalized3HoursFixture)

  });
});
