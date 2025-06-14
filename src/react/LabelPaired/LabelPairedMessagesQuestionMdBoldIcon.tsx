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
      <path d='M2.25 5.5a.74.74 0 0 0-.75.75v5.5c0 .438.313.75.75.75h1.5a.76.76 0 0 1 .75.75v.625l1.813-1.25c.125-.062.28-.125.437-.125h4a.74.74 0 0 0 .75-.75v-5.5a.76.76 0 0 0-.75-.75zM0 6.25C0 5.031 1 4 2.25 4h8.5C11.969 4 13 5.031 13 6.25v5.5A2.26 2.26 0 0 1 10.75 14H6.969l-2.813 1.875c-.25.156-.531.188-.781.063A.78.78 0 0 1 3 15.25V14h-.75C1 14 0 13 0 11.75zM8 15h1.5v.75c0 .438.313.75.75.75h3c.125 0 .281.063.406.125l1.844 1.25v-.625a.74.74 0 0 1 .75-.75h1.5a.74.74 0 0 0 .75-.75v-5.5a.76.76 0 0 0-.75-.75H14V8h3.75C18.969 8 20 9.031 20 10.25v5.5A2.26 2.26 0 0 1 17.75 18H17v1.25c0 .281-.156.531-.406.688-.25.125-.532.093-.782-.063L13 18h-2.75C9 18 8 17 8 15.75zM4.594 7.031A1.24 1.24 0 0 1 5.75 6.22h1.281c.75 0 1.375.593 1.375 1.375 0 .468-.281.937-.687 1.156L7 9.188c0 .28-.25.5-.5.5a.494.494 0 0 1-.5-.5v-.282c0-.187.094-.344.25-.437l.969-.563a.34.34 0 0 0 .187-.312.36.36 0 0 0-.375-.375H5.75a.21.21 0 0 0-.187.125l-.032.031c-.093.25-.375.406-.625.313a.524.524 0 0 1-.312-.657m1.187 4.094a.61.61 0 0 1 .344-.625.61.61 0 0 1 .719 0c.218.125.375.375.343.625a.68.68 0 0 1-.343.656.61.61 0 0 1-.719 0 .63.63 0 0 1-.344-.656' />
    </g>
    <defs>
      <clipPath id='3674362c0899d1306d5b215cc57862eb__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionMdBoldIcon);
export default ForwardRef;
