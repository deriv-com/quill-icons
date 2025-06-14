import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleOneLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10.469-4.844c-.313-.195-.664-.195-.938 0l-2.187 1.25a.876.876 0 0 0-.352 1.25.876.876 0 0 0 1.25.352l.82-.43v5.547H7.5a.925.925 0 0 0-.937.938c0 .546.39.937.937.937h5c.508 0 .938-.39.938-.937a.95.95 0 0 0-.938-.938h-1.562v-7.187a.94.94 0 0 0-.47-.782' />
    </g>
    <defs>
      <clipPath id='49c3f021be17653c4a508f6b5d00be8f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleOneLgFillIcon);
export default ForwardRef;
