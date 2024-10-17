import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronDownXlFillIcon = (
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
      <path d='m10.922 25.078-9-9a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0L12 21.892l7.922-7.922a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11l-9 9c-.563.608-1.548.608-2.11 0' />
    </g>
    <defs>
      <clipPath id='86e8d6d6e7e8c955977817baf0ff6860__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownXlFillIcon);
export default ForwardRef;
