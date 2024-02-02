import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopySmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.875 12.938q.41-.028.438-.438V6.922l-1.86-1.86H5.625q-.41.029-.437.438v7q.027.41.437.438zm-5.25 1.312q-.738-.027-1.23-.52-.493-.492-.52-1.23v-7q.027-.738.52-1.23.492-.493 1.23-.52h3.828q.548 0 .93.383l1.86 1.86q.381.381.382.929V12.5q-.027.738-.52 1.23-.492.493-1.23.52zm-3.5-7H3v1.313h-.875q-.41.027-.437.437v7q.027.41.437.438h5.25q.41-.028.438-.438v-.875h1.312V16q-.027.738-.52 1.23-.492.493-1.23.52h-5.25q-.738-.027-1.23-.52-.493-.492-.52-1.23V9q.027-.738.52-1.23.492-.493 1.23-.52' />
    </g>
    <defs>
      <clipPath id='7192158f76a655a7__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopySmBoldIcon);
export default ForwardRef;
