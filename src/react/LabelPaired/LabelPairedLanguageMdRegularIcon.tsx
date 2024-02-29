import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageMdRegularIcon = (
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
      <path d='M9.5 7H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 8v8q0 .438.281.719A.97.97 0 0 0 2 17h7.5zm1 0v10H18a.97.97 0 0 0 .719-.281A.97.97 0 0 0 19 16V8a.97.97 0 0 0-.281-.719A.97.97 0 0 0 18 7zM20 8v8q-.03.844-.594 1.406-.562.563-1.406.594H2q-.843-.03-1.406-.594Q.032 16.844 0 16V8q.03-.843.594-1.406Q1.157 6.032 2 6h16q.844.03 1.406.594Q19.97 7.156 20 8M5.469 9.313l2 5q.125.437-.282.656-.437.125-.656-.281L6.25 14h-2.5l-.281.688q-.22.406-.656.28-.407-.218-.282-.655l2-5Q4.687 9 5 9t.469.313M5 10.843 4.125 13h1.75zM15.5 9.5v.5h2q.47.031.5.5-.03.47-.5.5h-.156l-.125.375a6.4 6.4 0 0 1-1.375 2.156l.312.188.594.344q.375.28.188.687-.282.375-.688.188l-.594-.376a3.6 3.6 0 0 1-.594-.374q-.375.28-.812.5l-.531.25q-.437.155-.656-.22-.189-.436.218-.655l.531-.282q.25-.125.5-.281l-.656-.656q-.28-.345 0-.688.345-.312.688 0l.719.688.03.031a5.2 5.2 0 0 0 1.188-1.844V11H12.5q-.469-.03-.5-.5.031-.469.5-.5h2v-.5q.031-.469.5-.5.47.031.5.5' />
    </g>
    <defs>
      <clipPath id='6e73777c33a17ac96c4335c70ce4c731__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageMdRegularIcon);
export default ForwardRef;
