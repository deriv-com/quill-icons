import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.492 4.367a.53.53 0 0 1 .258.446v7.875c0 .234-.164.445-.375.539l-3.937 1.5a.52.52 0 0 1-.376 0l-4.312-1.43L1 14.727a.51.51 0 0 1-.516-.07c-.164-.095-.234-.282-.234-.47V6.314a.56.56 0 0 1 .352-.516l3.937-1.5a.52.52 0 0 1 .375 0l4.313 1.43 3.75-1.43a.51.51 0 0 1 .515.07M1.375 6.711v6.68l2.813-1.078v-6.68zm7.313 6.703v-6.68L5.312 5.61v6.68zm1.124-.023 2.813-1.078v-6.68L9.813 6.71z' />
    </g>
    <defs>
      <clipPath id='ac91c53c1ec0705e3056cf54c44a3098__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapCaptionBoldIcon);
export default ForwardRef;
