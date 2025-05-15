import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGraduationCapMdRegularIcon = (
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
      <path d='M9.594 6.094 1.469 9l2.312.844c.313-.219.688-.375 1.063-.531l4.969-1.876c.25-.093.53.032.656.313.094.25-.063.531-.313.625L5.187 10.25c-.062.031-.093.031-.156.063l4.563 1.624c.125.063.25.063.406.063.125 0 .25 0 .375-.062L18.5 9l-8.125-2.906a.865.865 0 0 0-.781 0m-.344 6.781-5.312-1.906A4.16 4.16 0 0 0 2.5 13.906c.188.438.313.875.406 1.313.219.844.344 2.062.063 3.406-.031.125-.094.25-.219.313a.54.54 0 0 1-.375.062l-2-.5c-.156-.031-.312-.156-.344-.312a.5.5 0 0 1 .063-.47c.25-.374.5-.78.687-1.187.375-.718.719-1.625.719-2.531v-.031c.031-1.281.563-2.469 1.406-3.375L.47 9.719C.188 9.625 0 9.344 0 9c0-.312.188-.594.469-.687L9.25 5.156C9.469 5.063 9.719 5 10 5c.25 0 .5.063.719.156L19.5 8.313a.743.743 0 0 1 0 1.406l-8.781 3.156A1.8 1.8 0 0 1 10 13c-.281 0-.531-.031-.75-.125m-3.812-.312L5 16.719a.4.4 0 0 0 .125.093c.188.188.5.375 1 .563C7.063 17.75 8.438 18 10 18c1.531 0 2.906-.25 3.875-.625.469-.187.781-.375 1-.562.031-.032.094-.063.094-.094l-.438-4.157.969-.343.5 4.531c0 1.125-2.687 2.25-6 2.25-3.312 0-6-1.125-6-2.25l.469-4.531zM15 16.656v.032zm-10.031 0v.032zm-2.875 1.25a8.3 8.3 0 0 0-.031-1.781c-.126.313-.25.594-.376.875-.125.219-.25.469-.406.688z' />
    </g>
    <defs>
      <clipPath id='81d882acd6c5e0d2f9c02da30fbf09b6__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGraduationCapMdRegularIcon);
export default ForwardRef;
