import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpMdBoldIcon = (
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
      <path d='M10.125 5.094q.906.28 1.344 1.062.437.781.187 1.719L11.5 8.5q-.157.5-.375 1H14q.844.03 1.406.594.563.563.594 1.406-.03.844-.594 1.406.094.282.094.594-.03 1-.781 1.594.03.187.031.406-.03 1-.75 1.563-.03.843-.594 1.375-.563.53-1.406.562H8.969A3.52 3.52 0 0 1 7 18.406l-1.906-1.281q-.562-.437-.219-1.031.438-.531 1.031-.219l1.938 1.281q.5.345 1.125.344H12q.47-.03.5-.5a.3.3 0 0 0-.031-.125q-.126-.626.469-.906.28-.126.312-.469a.5.5 0 0 0-.094-.312q-.25-.345-.125-.72a.76.76 0 0 1 .563-.468q.375-.094.406-.5a.54.54 0 0 0-.125-.344.68.68 0 0 1-.156-.656.75.75 0 0 1 .469-.531q.28-.126.312-.469-.03-.469-.5-.5H9.813q-.437 0-.657-.406a.76.76 0 0 1 .063-.781q.563-.781.812-1.72l.188-.624q.124-.688-.5-.938-.688-.124-.938.5l-.187.625a4.5 4.5 0 0 1-.938 1.719l-1.593 1.75q-.5.469-1.063.063-.468-.532-.062-1.063l1.625-1.781q.405-.469.593-1.094l.188-.625q.28-.906 1.062-1.344.781-.437 1.719-.187M1 10h2q.438 0 .719.281A.97.97 0 0 1 4 11v7a.97.97 0 0 1-.281.719A.97.97 0 0 1 3 19H1a.97.97 0 0 1-.719-.281A.97.97 0 0 1 0 18v-7q0-.437.281-.719A.97.97 0 0 1 1 10' />
    </g>
    <defs>
      <clipPath id='d6a24dfb1944d3d8364d854b99dbe355__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpMdBoldIcon);
export default ForwardRef;
