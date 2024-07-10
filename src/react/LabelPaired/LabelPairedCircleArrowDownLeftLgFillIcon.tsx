import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownLeftLgFillIcon = (
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
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m2.5-5.625c.508 0 .938-.39.938-.937A.95.95 0 0 0 12.5 18H8.79l5.312-5.273a.92.92 0 0 0 0-1.29c-.391-.39-.977-.39-1.329 0L7.5 16.712v-4.023a.95.95 0 0 0-.937-.938.925.925 0 0 0-.938.938v6.25c0 .546.39.937.938.937z' />
    </g>
    <defs>
      <clipPath id='db7066ffd93c91f507a938099bfc423b__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownLeftLgFillIcon);
export default ForwardRef;
