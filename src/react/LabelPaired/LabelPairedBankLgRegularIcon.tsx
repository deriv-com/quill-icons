import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.273 5.617 9.102 5.117c.39.235.625.625.625 1.055 0 .664-.547 1.211-1.25 1.211H1.21C.548 13 0 12.453 0 11.79c0-.43.234-.821.586-1.056l9.102-5.117c.195-.117.43-.117.585 0m1.68 6.133h6.68L10 6.867 1.328 11.75h6.68c-.156-.273-.195-.586-.195-.937 0-1.172.976-2.188 2.187-2.188 1.172 0 2.188 1.016 2.188 2.188q0 .527-.235.937M10 9.875a.925.925 0 0 0-.937.938c0 .546.39.937.937.937.508 0 .938-.39.938-.937A.95.95 0 0 0 10 9.875M2.5 19.25v-5h1.25v5h3.125v-5h1.25v5h3.75v-5h1.25v5h3.125v-5h1.25v5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-15a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m-.937 2.5h16.875c.312 0 .625.313.625.625a.64.64 0 0 1-.625.625H1.563a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m-.938 2.5h18.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.625A.617.617 0 0 1 0 24.875c0-.312.273-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='2818f02547ba1cfe5c39acbf56e42934__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankLgRegularIcon);
export default ForwardRef;
