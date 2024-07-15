import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCirclePlusLgFillIcon = (
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
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m-.937-6.562c0 .546.39.937.937.937.508 0 .938-.39.938-.937v-2.5h2.5c.507 0 .937-.391.937-.938a.95.95 0 0 0-.937-.937h-2.5v-2.5a.95.95 0 0 0-.938-.938.925.925 0 0 0-.937.938v2.5h-2.5a.925.925 0 0 0-.938.937c0 .547.39.938.938.938h2.5z' />
    </g>
    <defs>
      <clipPath id='d2a0df287963d9f5b69d85a312bf95a9__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCirclePlusLgFillIcon);
export default ForwardRef;
