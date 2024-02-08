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
      <path d='M2.219 5.063q-.602.054-.656.656v4.812q.054.602.656.656H3.53q.602.056.656.657v.52l1.614-1.067a.63.63 0 0 1 .355-.11h3.5q.602-.054.656-.656V5.72q-.054-.601-.656-.657zM.25 5.719q.027-.848.574-1.395.548-.546 1.395-.574h7.437q.848.027 1.395.574.547.548.574 1.395v4.812q-.028.848-.574 1.395-.548.547-1.395.574H6.348l-2.461 1.64a.65.65 0 0 1-.657.028.68.68 0 0 1-.355-.574V12.5h-.656q-.848-.028-1.395-.574-.546-.547-.574-1.395zm7 7.656h1.313v.656q.054.602.656.656h2.625q.191 0 .355.11l1.614 1.066v-.52q.054-.6.656-.655h1.312q.602-.056.656-.657V9.22q-.054-.602-.656-.656H12.5V7.25h3.281q.848.027 1.395.574t.574 1.395v4.812q-.027.848-.574 1.395T15.78 16h-.656v1.094a.68.68 0 0 1-.355.574.65.65 0 0 1-.657-.027L11.653 16H9.218q-.848-.028-1.395-.574-.546-.547-.574-1.395zm-2.953-7q.273-.656.984-.71H6.43q.492.026.847.355.329.356.328.847 0 .684-.601 1.04l-.629.355v.027q-.027.383-.437.438-.411-.056-.438-.438v-.273q0-.246.219-.383l.847-.492a.28.28 0 0 0 .164-.274q-.027-.3-.3-.328H5.28a.25.25 0 0 0-.164.137v.027q-.191.356-.574.246-.356-.164-.246-.547zm1.012 3.61q0-.357.3-.575a.61.61 0 0 1 .657 0q.3.219.3.574 0 .356-.3.575a.61.61 0 0 1-.657 0 .68.68 0 0 1-.3-.575' />
    </g>
    <defs>
      <clipPath id='4986876878aa98c4ae8e203adb56d292__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionSmBoldIcon);
export default ForwardRef;
