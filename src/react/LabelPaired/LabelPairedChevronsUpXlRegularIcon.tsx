import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.516 8.484 9 9c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0L12 10.079l-8.484 8.485c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l9-9c.28-.28.796-.28 1.078 0m9 18c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0L12 19.079l-8.484 8.485c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l9-9c.28-.28.796-.28 1.078 0z' />
    </g>
    <defs>
      <clipPath id='54f7c863b436d9038998cf4a0d5bb0a1__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpXlRegularIcon);
export default ForwardRef;
