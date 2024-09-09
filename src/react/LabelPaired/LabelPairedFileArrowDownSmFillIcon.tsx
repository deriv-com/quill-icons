import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileArrowDownSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 3.75h4.375v3.5c0 .492.383.875.875.875h3.5V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m5.25 0 3.5 3.5h-3.5zm-1.094 6.344H6.13a.65.65 0 0 0-.656-.656c-.356 0-.657.3-.657.656v2.816l-.847-.848a.6.6 0 0 0-.903 0 .6.6 0 0 0 0 .903l1.97 1.969a.6.6 0 0 0 .902 0l1.968-1.97a.6.6 0 0 0 0-.902.6.6 0 0 0-.902 0l-.848.848z' />
    </g>
    <defs>
      <clipPath id='564c6258f272a04a850cf89c34187743__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileArrowDownSmFillIcon);
export default ForwardRef;
