
import { sample } from 'lodash'
import { BasicLayout } from '../layout'

export default () =>
  <BasicLayout>
    <p>{sample(['Howdy', 'Hi', 'Hello', 'Welcome', 'Bonjour'])}! I'm Ben Tatum, a software consultant for Quicken Loans, Cheddar Up, Costimize and _______.</p>
  </BasicLayout>
