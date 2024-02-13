import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.375 8.938v4.101l6.914-4.844Q10.563 8 10.953 8q.508 0 .82.352.352.312.352.82v12.656q0 .508-.352.82-.312.352-.82.352-.351 0-.664-.195L3.375 17.96v4.102q-.079.858-.937.937-.86-.079-.938-.937V8.937q.078-.858.938-.937.859.078.937.938m0 6.718L10.25 20.5v-9.96l-6.875 4.804z' />
    </g>
    <defs>
      <clipPath id='78fa3254bf4acf87cb7cc97c74341f15__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepLgBoldIcon);
export default ForwardRef;
