import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.219 5H9.75c.781 0 1.438.5 1.688 1.219l.25.781H14c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V9c0-1.094.875-2 2-2h2.281l.282-.781.687.218-.687-.218A1.745 1.745 0 0 1 6.219 5m-.25 1.688L5.53 8c-.093.313-.375.5-.718.5H2c-.281 0-.5.25-.5.5v8c0 .281.219.5.5.5h12c.25 0 .5-.219.5-.5V9c0-.25-.25-.5-.5-.5h-2.844c-.344 0-.625-.187-.719-.5L10 6.688a.27.27 0 0 0-.25-.188H6.219a.27.27 0 0 0-.25.188M8 16.5a3.44 3.44 0 0 1-3.031-1.75c-.657-1.062-.657-2.406 0-3.5A3.5 3.5 0 0 1 8 9.5c1.25 0 2.375.688 3 1.75.656 1.094.656 2.438 0 3.5a3.43 3.43 0 0 1-3 1.75M6 13c0 .719.375 1.375 1 1.75.594.344 1.375.344 2 0 .594-.375 1-1.031 1-1.75 0-.687-.406-1.344-1-1.719-.625-.344-1.406-.344-2 0A2.02 2.02 0 0 0 6 13' />
    </g>
    <defs>
      <clipPath id='d39b49aa2c9bd0a1fe7b8541bf8392ce__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraMdBoldIcon);
export default ForwardRef;
