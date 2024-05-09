import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M20.766 10.734c.28.282.28.797 0 1.079l-12.75 12.75c-.282.28-.797.28-1.078 0l-6.75-6.75c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0L7.5 22.97l12.188-12.235c.28-.28.796-.28 1.078 0' />
    </g>
    <defs>
      <clipPath id='ed8cdaec26636370358484236946afaa__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckXlRegularIcon);
export default ForwardRef;
