import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivProductDerivP2pBrandLightLogoHorizontalIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 72 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#FF444F'
      d='M0 13.5C0 6.044 6.044 0 13.5 0h45C65.956 0 72 6.044 72 13.5v45C72 65.956 65.956 72 58.5 72h-45C6.044 72 0 65.956 0 58.5z'
    />
    <path
      fill='#E12E3A'
      d='M13.5 0C6.044 0 0 6.044 0 13.5v.392L67.308 3.268A13.45 13.45 0 0 0 58.5 0zM68.697 4.652 56.35 72h2.15C65.956 72 72 65.956 72 58.5v-45c0-3.384-1.246-6.478-3.303-8.848'
    />
    <path
      fill='#fff'
      d='M18.086 25.865q4.534 0 6.962 1.609 2.427 1.58 2.427 5.206 0 3.657-2.457 5.294-2.457 1.61-7.02 1.61h-1.433v6.785h-4.563V26.391a26 26 0 0 1 3.159-.41 42 42 0 0 1 2.925-.116m.293 3.89q-.498 0-.995.03-.468.028-.819.058v5.85h1.433q2.37 0 3.569-.644 1.2-.643 1.199-2.398 0-.849-.322-1.404a2.1 2.1 0 0 0-.877-.878q-.556-.351-1.375-.468a10.4 10.4 0 0 0-1.814-.146M41.531 31.422q0 1.112-.438 2.136a10.2 10.2 0 0 1-1.141 1.989 17 17 0 0 1-1.58 1.813q-.877.877-1.725 1.667-.44.41-.966.936-.497.498-.965 1.024-.468.527-.848.995-.35.439-.439.73h8.717v3.657H28.632a4.7 4.7 0 0 1-.058-.819v-.702q0-1.404.438-2.574a9.8 9.8 0 0 1 1.2-2.164 14 14 0 0 1 1.638-1.902q.936-.877 1.842-1.755l1.317-1.257q.614-.615 1.082-1.17.468-.585.731-1.141.264-.585.263-1.17 0-1.287-.73-1.814-.732-.526-1.814-.526-.79 0-1.492.263a6.7 6.7 0 0 0-1.258.585q-.555.322-.965.673a7 7 0 0 0-.614.526l-2.165-3.042q1.287-1.199 2.984-1.96a8.75 8.75 0 0 1 3.685-.79q1.784 0 3.071.41t2.106 1.17a4.2 4.2 0 0 1 1.229 1.814q.41 1.053.41 2.398M50.61 25.865q4.533 0 6.96 1.609Q60 29.054 60 32.68q0 3.657-2.457 5.294-2.457 1.61-7.02 1.61h-1.434v6.785h-4.563V26.391a26 26 0 0 1 3.16-.41 42 42 0 0 1 2.924-.116m.292 3.89q-.498 0-.995.03-.468.028-.819.058v5.85h1.434q2.37 0 3.568-.644 1.2-.643 1.2-2.398 0-.849-.322-1.404a2.1 2.1 0 0 0-.878-.878q-.556-.351-1.375-.468a10.4 10.4 0 0 0-1.813-.146'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivProductDerivP2pBrandLightLogoHorizontalIcon);
export default ForwardRef;
