import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 5.5q-.687.063-.75.75v5.5q.063.687.75.75h1.5q.687.063.75.75v.594l1.844-1.219a.7.7 0 0 1 .406-.125h4q.687-.063.75-.75v-5.5q-.063-.687-.75-.75zM0 6.25q.031-.969.656-1.594Q1.281 4.032 2.25 4h8.5q.969.031 1.594.656.624.625.656 1.594v5.5q-.031.969-.656 1.594-.625.624-1.594.656H6.969l-2.813 1.875a.75.75 0 0 1-.75.031A.78.78 0 0 1 3 15.25V14h-.75q-.969-.031-1.594-.656Q.032 12.719 0 11.75zM8 15h1.5v.75q.063.687.75.75h3q.219 0 .406.125l1.844 1.219v-.594q.063-.687.75-.75h1.5q.687-.063.75-.75v-5.5q-.063-.687-.75-.75H14V8h3.75q.969.031 1.594.656.624.625.656 1.594v5.5q-.031.969-.656 1.594-.625.624-1.594.656H17v1.25a.78.78 0 0 1-.406.656.75.75 0 0 1-.75-.031L13.03 18H10.25q-.969-.031-1.594-.656-.624-.625-.656-1.594zM4.625 7q.312-.75 1.125-.812h1.313q.562.03.968.406.375.405.375.968 0 .781-.687 1.188L7 9.156v.031q-.03.438-.5.5-.469-.062-.5-.5v-.312a.49.49 0 0 1 .25-.437l.969-.563a.32.32 0 0 0 .187-.312q-.03-.345-.343-.375H5.75a.28.28 0 0 0-.187.156v.031q-.219.406-.657.281-.405-.187-.281-.625zm1.156 4.125q0-.406.344-.656.375-.219.75 0 .345.25.344.656 0 .406-.344.656a.7.7 0 0 1-.75 0 .78.78 0 0 1-.344-.656' />
    </g>
    <defs>
      <clipPath id='cd6c264f63894b41__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionMdBoldIcon);
export default ForwardRef;
