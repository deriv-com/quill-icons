import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownMdBoldIcon = (
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
      <path d='M10.125 18.906q-.937.25-1.719-.187-.78-.438-1.062-1.344l-.188-.625a2.9 2.9 0 0 0-.593-1.094l-1.625-1.781q-.406-.531.062-1.031.563-.437 1.063.031l1.593 1.781q.656.72.938 1.688l.187.625q.25.624.938.5.624-.25.5-.938l-.188-.625a5.2 5.2 0 0 0-.812-1.719.76.76 0 0 1-.063-.78.78.78 0 0 1 .656-.407H14q.47-.03.5-.5-.03-.344-.312-.469a.75.75 0 0 1-.47-.531.68.68 0 0 1 .157-.656A.54.54 0 0 0 14 10.5q-.03-.405-.406-.5a.76.76 0 0 1-.563-.469.74.74 0 0 1 .125-.719.5.5 0 0 0 .094-.312q-.03-.344-.312-.469-.594-.281-.47-.906A.3.3 0 0 0 12.5 7q-.03-.469-.5-.5H8.969a1.94 1.94 0 0 0-1.125.344L5.906 8.125q-.594.312-1.031-.219-.344-.594.219-1.031L7 5.594A3.52 3.52 0 0 1 8.969 5H12q.844 0 1.406.563.563.53.594 1.375.72.562.75 1.562 0 .219-.031.406.75.562.781 1.594 0 .312-.094.594.563.563.594 1.406-.03.844-.594 1.406-.563.563-1.406.594h-2.875q.218.5.375 1l.156.625q.25.938-.187 1.719-.438.78-1.344 1.062M1 16a.97.97 0 0 1-.719-.281A.97.97 0 0 1 0 15V8q0-.437.281-.719A.97.97 0 0 1 1 7h2q.438 0 .719.281A.97.97 0 0 1 4 8v7a.97.97 0 0 1-.281.719A.97.97 0 0 1 3 16z' />
    </g>
    <defs>
      <clipPath id='ccfe165c7045edfcd5350f4baa4a9a08__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownMdBoldIcon);
export default ForwardRef;
