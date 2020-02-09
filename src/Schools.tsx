import { SchoolModel } from './Models';

/**
 * The current list of all schools, routes, and stops.
 *
 * TODO: This should probably be converted to some other datastore that
 *     can be managed independent of source control, perhaps keeping this
 *     as a set of defaults or test data.
 * TODO: Think about creating common objects for shared stops like 'School'
 */
const SCHOOLS: Array<SchoolModel> = [{
  name: 'Bailey Gatzert',
  routes: [
    {
      name: 'Jefferson',
      stops: [
        { name: '20th Ave and East Jefferson St' },
        { name: '12th Ave and East Jefferson St' },
        { name: '12th Ave and East Alder St' },
        { name: 'School' },
      ]
    },
    {
      name: 'Yesler',
      stops: [
        { name: '19th Ave and East Yesler Way' },
        { name: '17th Ave and East Yesler Way' },
        { name: '15th Ave and East Yesler Way' },
        { name: 'School' },
      ]
    }
  ]
}];

export default SCHOOLS;