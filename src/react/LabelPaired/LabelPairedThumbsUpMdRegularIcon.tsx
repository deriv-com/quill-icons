import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpMdRegularIcon = (
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
      <path d='m9.031 6.563-.156.5Q8.344 9 6.625 10.125l-.094.063q-.375.218-.625.593-.312.345-.687.125-.375-.28-.125-.687.344-.531.906-.875l.094-.063q1.374-.906 1.812-2.469l.157-.53q.218-.72.812-1.063.625-.345 1.344-.157.687.219 1.062.813.344.625.156 1.344l-.124.5a7.4 7.4 0 0 1-.5 1.281H14q.844.03 1.406.594.563.563.594 1.406-.03.844-.594 1.406.094.282.094.594-.031.906-.656 1.469.156.375.156.781-.063 1.156-1 1.719V17q-.03.844-.594 1.406-.563.563-1.406.594H9.188a3.47 3.47 0 0 1-1.938-.594l-1.187-.781a3.8 3.8 0 0 1-1-1q-.187-.406.156-.687.406-.22.687.124.281.438.719.72l1.188.812Q8.437 18 9.219 18H12a.97.97 0 0 0 .719-.281A.97.97 0 0 0 13 17a.7.7 0 0 0-.031-.219q-.031-.405.344-.562.656-.25.687-.969a.87.87 0 0 0-.219-.594.62.62 0 0 1-.094-.437.47.47 0 0 1 .282-.313q.5-.281.531-.906a1 1 0 0 0-.125-.5q-.187-.375.156-.656.438-.282.469-.844a.97.97 0 0 0-.281-.719A.97.97 0 0 0 14 10H9.969a.49.49 0 0 1-.438-.25.48.48 0 0 1 .031-.5 8 8 0 0 0 .782-1.781l.125-.532q.124-.656-.531-.906-.657-.125-.907.532M1 11v7h2v-7zm-1 0q0-.437.281-.719A.97.97 0 0 1 1 10h2q.438 0 .719.281A.97.97 0 0 1 4 11v7a.97.97 0 0 1-.281.719A.97.97 0 0 1 3 19H1a.97.97 0 0 1-.719-.281A.97.97 0 0 1 0 18z' />
    </g>
    <defs>
      <clipPath id='684e21edfb31605f__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpMdRegularIcon);
export default ForwardRef;
