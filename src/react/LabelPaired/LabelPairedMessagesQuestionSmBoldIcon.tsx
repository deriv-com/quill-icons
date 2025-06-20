import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.219 5.063c-.383 0-.656.3-.656.656v4.812c0 .383.273.656.656.656H3.53c.356 0 .656.301.656.657v.547l1.586-1.094a.9.9 0 0 1 .383-.11h3.5a.65.65 0 0 0 .656-.656V5.72c0-.356-.3-.657-.656-.657zM.25 5.719c0-1.067.875-1.969 1.969-1.969h7.437c1.067 0 1.969.902 1.969 1.969v4.812A1.98 1.98 0 0 1 9.656 12.5H6.348l-2.461 1.64c-.219.137-.465.165-.684.055a.69.69 0 0 1-.328-.601V12.5h-.656A1.96 1.96 0 0 1 .25 10.531zm7 7.656h1.313v.656c0 .383.273.656.656.656h2.625c.11 0 .246.055.355.11l1.614 1.094v-.547c0-.356.273-.656.656-.656h1.312a.65.65 0 0 0 .656-.657V9.22c0-.356-.3-.656-.656-.656H12.5V7.25h3.281c1.067 0 1.969.902 1.969 1.969v4.812A1.98 1.98 0 0 1 15.781 16h-.656v1.094a.71.71 0 0 1-.355.601c-.22.11-.465.082-.684-.054L11.625 16H9.219a1.96 1.96 0 0 1-1.969-1.969zM4.27 6.402c.164-.437.574-.71 1.011-.71h1.121c.657 0 1.203.519 1.203 1.203 0 .41-.246.82-.601 1.011l-.629.383a.45.45 0 0 1-.437.438.43.43 0 0 1-.438-.438v-.246c0-.164.082-.3.219-.383l.847-.492a.3.3 0 0 0 .164-.273.316.316 0 0 0-.328-.329h-1.12a.19.19 0 0 0-.165.11l-.027.027c-.082.219-.328.356-.547.274a.46.46 0 0 1-.273-.575m1.039 3.582a.53.53 0 0 1 .3-.546.53.53 0 0 1 .63 0c.19.109.327.328.3.546a.59.59 0 0 1-.3.575.53.53 0 0 1-.63 0 .55.55 0 0 1-.3-.575' />
    </g>
    <defs>
      <clipPath id='b5e3b29aba1b41cda8c222665e26b24c__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionSmBoldIcon);
export default ForwardRef;
