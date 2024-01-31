import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.75 13q-.078-2.656-1.836-4.414T7.5 6.75q-2.655.078-4.414 1.836T1.25 13q0 .938.664 2.46a26 26 0 0 0 1.68 3.243 41 41 0 0 0 2.07 3.047Q6.72 23.194 7.5 24.172a70 70 0 0 0 1.836-2.422 41 41 0 0 0 2.07-3.047 23 23 0 0 0 1.719-3.242q.625-1.524.625-2.461M15 13q-.078 1.758-1.25 4.063a39 39 0 0 1-2.734 4.453q-1.524 2.187-2.578 3.476-.39.47-.938.469-.547 0-.937-.469-1.055-1.29-2.579-3.476a39 39 0 0 1-2.734-4.453Q.078 14.758 0 13q.078-3.203 2.188-5.312T7.5 5.5q3.203.078 5.313 2.188T15 13m-9.375 0q.04 1.055.938 1.64.938.47 1.875 0 .898-.585.937-1.64-.04-1.055-.937-1.64-.938-.47-1.876 0-.897.585-.937 1.64M7.5 16.125q-1.758-.04-2.695-1.562-.86-1.563 0-3.126.937-1.523 2.695-1.562 1.758.039 2.695 1.563.86 1.562 0 3.124-.937 1.524-2.695 1.563' />
    </g>
    <defs>
      <clipPath id='aa21ee531b37aadf__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotLgRegularIcon);
export default ForwardRef;
