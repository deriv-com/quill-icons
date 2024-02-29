import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserSmBoldIcon = (
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
      <path d='M1.688 15.125q.027.41.437.438h8.75q.41-.028.438-.438v-1.312H1.688zm7.82-2.625h1.805V6.375q-.028-.41-.438-.437h-8.75q-.41.027-.437.437V12.5h1.804q.164-.575.602-.93.465-.383 1.093-.383h2.625q.63 0 1.094.383.438.356.602.93m3.117-6.125v8.75q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23v-8.75q.027-.738.52-1.23.492-.493 1.23-.52h8.75q.738.027 1.23.52.493.492.52 1.23M4.75 8.563q.027-.985.875-1.504.875-.494 1.75 0 .848.519.875 1.503-.027.985-.875 1.504-.875.493-1.75 0-.848-.519-.875-1.504' />
    </g>
    <defs>
      <clipPath id='a81041e79e80f13f23522e7d7f4c059b__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserSmBoldIcon);
export default ForwardRef;
