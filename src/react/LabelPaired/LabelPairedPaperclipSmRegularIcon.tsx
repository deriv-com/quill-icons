import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperclipSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.766 5.61a2.03 2.03 0 0 0-2.871 0l-5.25 5.25a3.25 3.25 0 0 0 0 4.62 3.25 3.25 0 0 0 4.62 0l4.157-4.156a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .63l-4.156 4.155c-1.614 1.614-4.266 1.614-5.88 0-1.613-1.64-1.613-4.265 0-5.879l5.25-5.25a2.955 2.955 0 0 1 4.13 0 2.955 2.955 0 0 1 0 4.13l-5.032 5.03c-.765.766-2.05.684-2.734-.163a1.837 1.837 0 0 1 .137-2.434l4.156-4.156a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .629l-4.156 4.156a.93.93 0 0 0-.082 1.258c.355.437 1.039.492 1.421.082l5.032-5.032a2.03 2.03 0 0 0 0-2.87' />
    </g>
    <defs>
      <clipPath id='70cc44eebdfe08b0ba6f55ccbdaf49be__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperclipSmRegularIcon);
export default ForwardRef;
