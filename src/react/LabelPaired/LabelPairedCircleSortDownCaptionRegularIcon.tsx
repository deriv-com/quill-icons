import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortDownCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0a5.228 5.228 0 0 0 0-9.07 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5M12 9.5a6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18m-6.281 3.656-2.25-2.25c-.094-.117-.14-.281-.07-.422a.36.36 0 0 1 .351-.234h4.5c.14 0 .281.094.328.234.07.141.024.305-.07.422l-2.25 2.25a.397.397 0 0 1-.54 0M4.64 11 6 12.36 7.336 11zM3.469 8.117l2.25-2.25c.14-.14.398-.14.539 0l2.25 2.25c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L6 6.663 4.008 8.656a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539' />
    </g>
    <defs>
      <clipPath id='3da7b5cfe812b83be7110751b36efd28__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortDownCaptionRegularIcon);
export default ForwardRef;
