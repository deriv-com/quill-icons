import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketIndicesFrance40Icon = (
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
    <path fill='#FF002D' d='M20 8h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6V8Z' />
    <path fill='#fff' d='M20 8h-8v16h8V8Z' />
    <path fill='#001F9B' d='M6 8h6v16H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M26 9H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1ZM6 8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H6Z'
      clipRule='evenodd'
    />
    <path
      fill='#414652'
      d='M18 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H20a2 2 0 0 1-2-2V2Z'
    />
    <path
      fill='#fff'
      d='M22.9 8V6.928h-2.457V5.904l2.176-3.488h1.424V6h.704v.928h-.704V8H22.9Zm-1.497-2H22.9V3.656h-.08L21.403 6ZM27.4 8.096c-.73 0-1.272-.253-1.624-.76-.352-.507-.528-1.216-.528-2.128 0-.912.176-1.621.528-2.128.352-.507.893-.76 1.624-.76.73 0 1.272.253 1.624.76.352.507.528 1.216.528 2.128 0 .912-.176 1.621-.528 2.128-.352.507-.893.76-1.624.76Zm0-1.016c.32 0 .541-.117.664-.352s.184-.565.184-.992V4.68c0-.427-.061-.757-.184-.992s-.344-.352-.664-.352c-.32 0-.541.117-.664.352s-.184.565-.184.992v1.056c0 .427.061.757.184.992s.344.352.664.352Z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketIndicesFrance40Icon);
export default ForwardRef;
