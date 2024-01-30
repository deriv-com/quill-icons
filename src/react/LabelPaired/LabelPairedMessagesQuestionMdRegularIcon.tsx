import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionMdRegularIcon = (
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
      <path d='M6.344 13H11a.97.97 0 0 0 .719-.281A.97.97 0 0 0 12 12V6a.97.97 0 0 0-.281-.719A.97.97 0 0 0 11 5H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 6v6q0 .438.281.719A.97.97 0 0 0 2 13h1q.438 0 .719.281A.97.97 0 0 1 4 14v.5l1.75-1.312A.96.96 0 0 1 6.344 13M11 14H6.344l-2.532 1.906a.54.54 0 0 1-.53.031A.44.44 0 0 1 3 15.5V14H2q-.843-.03-1.406-.594Q.032 12.843 0 12V6q.03-.843.594-1.406Q1.157 4.032 2 4h9q.844.03 1.406.594Q12.97 5.156 13 6v6q-.03.844-.594 1.406-.563.563-1.406.594m-1 4q-.843-.03-1.406-.594Q8.032 16.844 8 16v-1h1v1q0 .438.281.719A.97.97 0 0 0 10 17h3.656q.345 0 .625.188L16 18.5V18q0-.437.281-.719A.97.97 0 0 1 17 17h1a.97.97 0 0 0 .719-.281A.97.97 0 0 0 19 16v-6a.97.97 0 0 0-.281-.719A.97.97 0 0 0 18 9h-4V8h4q.844.03 1.406.594.563.563.594 1.406v6q-.03.844-.594 1.406-.562.563-1.406.594h-1v1.5a.44.44 0 0 1-.281.438.54.54 0 0 1-.532-.032L13.658 18zM5.75 6.188Q4.937 6.25 4.625 7v.031q-.125.438.281.625.47.126.657-.281v-.031q.062-.157.187-.157h1.313q.312.031.343.375 0 .219-.187.313l-.969.563a.49.49 0 0 0-.25.437v.313q.031.437.5.5.47-.063.5-.5v-.032l.719-.406q.687-.406.687-1.187 0-.594-.375-.97a1.5 1.5 0 0 0-.969-.405zm.75 5.656q.406 0 .656-.344a.7.7 0 0 0 0-.75.78.78 0 0 0-.656-.344q-.406 0-.656.344a.7.7 0 0 0 0 .75q.25.344.656.344' />
    </g>
    <defs>
      <clipPath id='5963087cf8312e43a19f83df4db4b117__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionMdRegularIcon);
export default ForwardRef;
