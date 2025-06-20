import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 19c.5 0 1.25-.437 1.906-1.781A9.7 9.7 0 0 0 10.687 15H5.314c.156.844.437 1.594.75 2.219C6.719 18.562 7.469 19 8 19m-2.875-5h5.719c.094-.625.156-1.281.156-2 0-.687-.062-1.344-.156-2H5.125A14 14 0 0 0 5 12c0 .719.031 1.375.125 2m.188-5h5.375a9.4 9.4 0 0 0-.782-2.187C9.25 5.469 8.5 5 8 5c-.531 0-1.281.469-1.937 1.813A8.2 8.2 0 0 0 5.313 9m6.562 1c.063.656.125 1.313.125 2 0 .719-.062 1.375-.125 2h2.813A6.9 6.9 0 0 0 15 12c0-.687-.125-1.344-.312-2zm2.438-1a7.1 7.1 0 0 0-4.094-3.625c.656.875 1.187 2.156 1.469 3.625zM4.28 9c.313-1.469.813-2.75 1.469-3.625A7.1 7.1 0 0 0 1.656 9zm-3 1A7.2 7.2 0 0 0 1 12c0 .719.094 1.375.281 2h2.844A13.5 13.5 0 0 1 4 12c0-.687.031-1.344.125-2zm8.938 8.656A7.05 7.05 0 0 0 14.313 15h-2.626c-.28 1.5-.812 2.75-1.468 3.656m-4.469 0C5.094 17.75 4.594 16.5 4.281 15H1.656a7.05 7.05 0 0 0 4.094 3.656M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20' />
    </g>
    <defs>
      <clipPath id='9057ceb9dd6d1c104fbbf0037dca8a2a__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeMdRegularIcon);
export default ForwardRef;
