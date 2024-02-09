import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownMdRegularIcon = (
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
      <path d='M9.031 17.438q.25.656.906.53.657-.25.532-.905l-.125-.532a8 8 0 0 0-.781-1.781.48.48 0 0 1-.032-.5.49.49 0 0 1 .438-.25H14a.97.97 0 0 0 .719-.281A.97.97 0 0 0 15 13q-.03-.562-.469-.844-.343-.28-.156-.656a1 1 0 0 0 .125-.5q-.03-.625-.531-.906a.47.47 0 0 1-.281-.313.62.62 0 0 1 .093-.437A.87.87 0 0 0 14 8.75q-.03-.72-.687-.969-.375-.156-.344-.562A.7.7 0 0 0 13 7a.97.97 0 0 0-.281-.719A.97.97 0 0 0 12 6H9.219q-.782 0-1.406.406l-1.188.813a2.4 2.4 0 0 0-.719.718q-.28.345-.687.125-.345-.28-.157-.687.407-.594 1-1l1.188-.781A3.47 3.47 0 0 1 9.188 5H12q.844.03 1.406.594Q13.97 6.156 14 7v.031q.937.563 1 1.719 0 .406-.156.781.624.563.656 1.469 0 .312-.094.594.563.563.594 1.406-.03.844-.594 1.406-.563.563-1.406.594h-3.187q.312.625.5 1.281l.124.5q.188.72-.156 1.344-.375.594-1.062.813-.72.187-1.344-.157-.594-.343-.812-1.062l-.157-.532q-.437-1.562-1.812-2.468L6 14.656l.25-.375-.25.375a2.8 2.8 0 0 1-.906-.875q-.25-.406.125-.687.375-.219.687.125.25.375.625.594l.094.062q1.719 1.124 2.25 3.063zM1 15h2V8H1zm-1 0V8q0-.437.281-.719A.97.97 0 0 1 1 7h2q.438 0 .719.281A.97.97 0 0 1 4 8v7a.97.97 0 0 1-.281.719A.97.97 0 0 1 3 16H1a.97.97 0 0 1-.719-.281A.97.97 0 0 1 0 15' />
    </g>
    <defs>
      <clipPath id='b31929d6ca2eeeddc76be416d26d7712__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownMdRegularIcon);
export default ForwardRef;
