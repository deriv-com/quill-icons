import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveLgFillIcon = (
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
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m-1.875-15h-.04c-.429 0-.82.352-.898.781l-.625 3.438a1 1 0 0 0 .157.742c.156.195.39.312.664.351l3.398.391c.625.078 1.094.586 1.094 1.211 0 .664-.547 1.211-1.25 1.211H9.219c-.43 0-.86-.195-1.133-.586l-.156-.234a.94.94 0 0 0-1.29-.274c-.43.313-.546.899-.234 1.328l.157.235c.585.898 1.601 1.406 2.656 1.406h1.406c1.719 0 3.125-1.367 3.125-3.086 0-1.562-1.21-2.89-2.773-3.086l-2.383-.273.312-1.68h3.281c.508 0 .938-.39.938-.937a.95.95 0 0 0-.937-.938z' />
    </g>
    <defs>
      <clipPath id='2a9b1b80f6bd7214da8842e6e080aa41__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveLgFillIcon);
export default ForwardRef;
