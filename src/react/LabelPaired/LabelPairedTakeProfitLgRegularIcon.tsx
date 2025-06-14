import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTakeProfitLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.75 11.79v8.944H7.031V11.79H3.906v-1.523h7.93v1.523zm4.766 8.944V10.266h4.492c.976 0 1.719.312 2.265.859.508.586.782 1.367.782 2.305 0 .976-.274 1.718-.782 2.304-.546.586-1.289.86-2.265.86h-2.813v4.14zm1.68-5.625h2.695c.43 0 .78-.117 1.015-.351.235-.235.352-.547.352-.977v-.703c0-.43-.117-.742-.352-.976-.234-.235-.586-.352-1.015-.352h-2.696z' />
    </g>
    <defs>
      <clipPath id='78fbb543230103eede6e498b96d3d396__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitLgRegularIcon);
export default ForwardRef;
