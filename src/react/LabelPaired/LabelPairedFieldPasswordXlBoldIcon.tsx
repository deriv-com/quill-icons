import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 11.625A1.85 1.85 0 0 0 2.625 13.5v9c0 1.078.797 1.875 1.875 1.875h21a1.85 1.85 0 0 0 1.875-1.875v-9a1.88 1.88 0 0 0-1.875-1.875zM.375 13.5A4.13 4.13 0 0 1 4.5 9.375h21c2.25 0 4.125 1.875 4.125 4.125v9a4.13 4.13 0 0 1-4.125 4.125h-21A4.1 4.1 0 0 1 .375 22.5zm19.875 9.375c-.656 0-1.125-.469-1.125-1.125v-7.5c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v7.5a1.11 1.11 0 0 1-1.125 1.125M9.375 18a1.89 1.89 0 0 1-.937 1.64c-.61.329-1.313.329-1.876 0-.609-.328-.937-.937-.937-1.64 0-.656.328-1.266.938-1.594.562-.328 1.265-.328 1.875 0 .562.328.937.938.937 1.594m4.5 0a1.89 1.89 0 0 1-.937 1.64c-.61.329-1.313.329-1.876 0-.609-.328-.937-.937-.937-1.64 0-.656.328-1.266.938-1.594.562-.328 1.265-.328 1.874 0 .563.328.938.938.938 1.594m4.5 0a1.89 1.89 0 0 1-.937 1.64c-.61.329-1.313.329-1.875 0-.61-.328-.938-.937-.938-1.64 0-.656.328-1.266.938-1.594.562-.328 1.265-.328 1.874 0 .563.328.938.938.938 1.594' />
    </g>
    <defs>
      <clipPath id='dec07f7595b6a2fbebb084f88340dce6__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordXlBoldIcon);
export default ForwardRef;
