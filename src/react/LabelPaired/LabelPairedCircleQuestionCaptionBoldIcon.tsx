import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleQuestionCaptionBoldIcon = (
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
      <path d='M10.875 9.5c0-1.734-.937-3.328-2.437-4.219a4.89 4.89 0 0 0-4.876 0A4.87 4.87 0 0 0 1.126 9.5a4.88 4.88 0 0 0 2.438 4.242c1.5.867 3.351.867 4.874 0 1.5-.89 2.438-2.484 2.438-4.242M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m3.96-2.11c.188-.538.68-.89 1.243-.89h1.36c.82 0 1.5.68 1.5 1.5 0 .516-.305 1.008-.75 1.266l-.75.445A.566.566 0 0 1 6 10.25a.54.54 0 0 1-.562-.562v-.305c0-.211.093-.399.28-.492l1.032-.586A.37.37 0 0 0 6.938 8c0-.21-.165-.352-.375-.352h-1.36c-.07 0-.14.047-.164.118l-.023.023a.55.55 0 0 1-.703.352.585.585 0 0 1-.352-.727zm1.29 4.36c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='78568ce0f9028109c11d049498f336be__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleQuestionCaptionBoldIcon);
export default ForwardRef;
