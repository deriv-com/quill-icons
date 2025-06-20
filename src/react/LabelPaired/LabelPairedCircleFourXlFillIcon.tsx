import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFourXlFillIcon = (
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
      <path d='M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m10.453-5.906c-.562-.235-1.219.094-1.406.703l-2.25 6.75c-.14.328-.047.703.14.984.235.328.563.469.938.469h4.875v1.875c0 .656.469 1.125 1.125 1.125A1.11 1.11 0 0 0 15 22.875V21h.375a1.11 1.11 0 0 0 1.125-1.125 1.14 1.14 0 0 0-1.125-1.125H15v-2.625A1.14 1.14 0 0 0 13.875 15a1.11 1.11 0 0 0-1.125 1.125v2.625H9.422l1.734-5.25c.235-.61-.094-1.219-.703-1.406' />
    </g>
    <defs>
      <clipPath id='adeb07748707ee180e984c82e34e825f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourXlFillIcon);
export default ForwardRef;
