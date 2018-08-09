import test from 'ava'
import { toGregorian, toHijri } from './'

test("test Hijri to Gregoeian converter", t => {
    const { gy, gm, gd } = toGregorian(1407, 7, 1)
    t.is(gy, 1987)
    t.is(gm, 3)
    t.is(gd, 1)
})

test("test Gregoeian to Hijri converter", t => {
    const { hy, hm, hd } = toHijri(1987, 3, 1)
    t.is(hy, 1407)
    t.is(hm, 7)
    t.is(hd, 1)
})