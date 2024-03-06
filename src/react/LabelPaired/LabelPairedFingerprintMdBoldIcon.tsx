import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintMdBoldIcon = (
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
      <path d='M1.5 12v1.25q-.063.687-.75.75-.687-.063-.75-.75V12q.03-2.25 1.094-4.031a7.9 7.9 0 0 1 2.875-2.875Q5.749 4.03 8 4q1.845 0 3.406.75a8 8 0 0 1 2.656 2.031q.406.563-.062 1.063-.563.406-1.062-.063a6.35 6.35 0 0 0-2.188-1.656Q9.5 5.5 8 5.5q-2.75.063-4.594 1.906Q1.563 9.25 1.5 12m14.344-1.656Q16 11.156 16 12v1.25q-.063.687-.75.75-.687-.063-.75-.75V12a7 7 0 0 0-.125-1.344q-.094-.687.563-.875.687-.094.906.563M8 6.5q2.345.063 3.906 1.625Q13.437 9.656 13.5 12v.781q0 1.313-.156 2.594-.126.594-.719.625-.375 0-.562-.25a.8.8 0 0 1-.188-.625A22 22 0 0 0 12 12.781V12q-.03-1.687-1.156-2.844Q9.687 8.031 8 8q-.531 0-1.031.125-.563.156-.938-.219-.249-.312-.156-.656.063-.344.438-.469A5 5 0 0 1 8 6.5M4.719 8.656q.344.5 0 1.063Q4.03 10.719 4 12v.781q0 1.344-.312 2.688-.157.5-.688.531a.69.69 0 0 1-.594-.312.8.8 0 0 1-.156-.657q.25-1.125.25-2.25V12q.03-1.938 1.156-3.375a.68.68 0 0 1 .531-.25q.282.031.532.281M11 12v.781q0 1.876-.375 3.688-.125.5-.656.531a.68.68 0 0 1-.531-.25.73.73 0 0 1-.126-.594q.313-1.687.313-3.375V12a1.75 1.75 0 0 0-.469-1.156A1.75 1.75 0 0 0 8 10.375q-.688.03-1.156.469A1.75 1.75 0 0 0 6.375 12v.781q0 1.906-.5 3.75-.156.438-.625.469-.375 0-.562-.281a.82.82 0 0 1-.125-.625Q5 14.468 5 12.78V12q.031-1.28.875-2.125Q6.718 9.032 8 9q1.281.031 2.125.875T11 12m-3-.75q.687.063.75.75v.781q0 3.095-1.125 6l-.187.5q-.281.594-.97.407-.592-.281-.405-.97l.187-.468q1-2.625 1-5.469V12q.063-.687.75-.75' />
    </g>
    <defs>
      <clipPath id='27c2c87c8a99ba249a67a1fd3083d86e__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintMdBoldIcon);
export default ForwardRef;
