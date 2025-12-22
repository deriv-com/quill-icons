import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.016 17.484c.28.282.28.797 0 1.078l-9 9c-.282.282-.797.282-1.078 0-.282-.28-.282-.796 0-1.078L12.422 18 3.938 9.563c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0z' />
    </g>
    <defs>
      <clipPath id='bf79cf8c10018d96be948e77dd764fec__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightXlRegularIcon);
export default ForwardRef;
