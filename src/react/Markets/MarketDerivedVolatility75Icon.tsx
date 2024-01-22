import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const MarketDerivedVolatility75Icon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#0AA0B0'
      d='M22.5 13H24v9h-1.5v10h-1V22H20v-9h1.5v-2h1zM30 11v7h-1.5v4h-1v-4H26v-7zM16.5 20v-4h-1v4H14v8h1.5v2h1v-2H18v-8zM10.5 15H12v6h-1.5v7h-1v-7H8v-6h1.5v-2h1zM4.5 19H6v4H4.5v2h-1v-2H2v-4h1.5v-2h1z'
    />
    <path
      fill='#414652'
      fillRule='evenodd'
      d='M2 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.403 3.392L3.531 8h1.264l1.8-4.544v-1.04H2.643v1.992H3.66V3.392zm3.237.072h2.536V2.416H7.76l-.208 3.16.984.136c.075-.085.181-.17.32-.256.144-.09.325-.136.544-.136.261 0 .467.075.616.224.15.15.224.352.224.608v.064c0 .272-.075.49-.224.656-.144.165-.36.248-.648.248-.288 0-.517-.075-.688-.224a2.201 2.201 0 0 1-.44-.56l-.872.688c.085.144.187.28.304.408.117.128.256.243.416.344.16.096.344.173.552.232.208.059.448.088.72.088.341 0 .645-.048.912-.144.267-.101.49-.24.672-.416.187-.176.325-.384.416-.624.096-.245.144-.51.144-.792 0-.277-.045-.525-.136-.744a1.6 1.6 0 0 0-.912-.912 1.856 1.856 0 0 0-.672-.12c-.176 0-.328.021-.456.064A.936.936 0 0 0 9 4.592c-.09.075-.17.168-.24.28a2.515 2.515 0 0 0-.176.36H8.52z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='m3.531 8 1.872-4.608H3.66v1.016H2.643V2.416h3.952v1.04L4.795 8zM11.176 3.464H8.64l-.12 1.768h.064c.053-.133.112-.253.176-.36.07-.112.15-.205.24-.28.09-.08.2-.141.328-.184.128-.043.28-.064.456-.064.24 0 .464.04.672.12a1.6 1.6 0 0 1 .912.912c.09.219.136.467.136.744 0 .283-.048.547-.144.792-.09.24-.23.448-.416.624a1.939 1.939 0 0 1-.672.416c-.267.096-.57.144-.912.144-.272 0-.512-.03-.72-.088a2.261 2.261 0 0 1-.552-.232 2.043 2.043 0 0 1-.416-.344 2.457 2.457 0 0 1-.304-.408l.872-.688c.123.219.27.405.44.56.17.15.4.224.688.224.288 0 .504-.083.648-.248.15-.165.224-.384.224-.656v-.064c0-.256-.075-.459-.224-.608-.15-.15-.355-.224-.616-.224-.219 0-.4.045-.544.136-.139.085-.245.17-.32.256l-.984-.136.208-3.16h3.416z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedVolatility75Icon);
export default ForwardRef;
