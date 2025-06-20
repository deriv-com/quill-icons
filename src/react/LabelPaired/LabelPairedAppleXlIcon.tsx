import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppleXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.906 18.61c0 .093-.14 2.859 2.906 4.312-.562 1.734-2.53 5.578-4.828 5.578-1.312 0-2.062-.844-3.562-.844-1.547 0-2.39.844-3.563.844-2.25.094-4.406-4.125-5.015-5.86a11.2 11.2 0 0 1-.656-3.796c0-4.172 2.765-6.188 5.39-6.235 1.266 0 2.86.891 3.563.891.656 0 2.484-1.078 4.172-.937 1.734.14 3.046.796 3.937 2.062-1.547.984-2.344 2.25-2.344 3.984m-2.625-7.688C11.344 12 10.22 12.609 9 12.516c-.094-1.266.375-2.438 1.219-3.375.75-.844 2.062-1.547 3.187-1.641 0 .516.14 1.922-1.125 3.422' />
    </g>
    <defs>
      <clipPath id='1f68f6b9d27c6117f666d74355d6c306__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppleXlIcon);
export default ForwardRef;
