import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFourXlRegularIcon = (
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
      <path d='M22.5 18c0-3.75-2.016-7.172-5.25-9.047-3.281-1.922-7.266-1.922-10.5 0A10.36 10.36 0 0 0 1.5 18c0 3.797 1.969 7.219 5.25 9.094 3.234 1.922 7.219 1.922 10.5 0A10.48 10.48 0 0 0 22.5 18M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m10.734-5.906c.422.14.61.562.422.937L8.578 19.5H13.5v-3.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v3.75h.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H15v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V21h-6c-.281 0-.516-.094-.656-.328-.14-.188-.14-.469-.047-.656l3-7.5c.14-.422.562-.61.984-.422z' />
    </g>
    <defs>
      <clipPath id='02acc0e983930c5308b0c565036c3d38__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourXlRegularIcon);
export default ForwardRef;
