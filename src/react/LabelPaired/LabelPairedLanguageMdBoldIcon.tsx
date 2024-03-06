import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageMdBoldIcon = (
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
      <path d='M2 6h16q.844.03 1.406.594Q19.97 7.156 20 8v8q-.03.844-.594 1.406-.562.563-1.406.594H2q-.843-.03-1.406-.594Q.032 16.844 0 16V8q.03-.843.594-1.406Q1.157 6.032 2 6m16 1.5h-8v9h8q.47-.03.5-.5V8q-.03-.469-.5-.5m-12.437 2Q5.406 9.156 5 9.125q-.405.03-.562.375l-2 4.5q-.188.531.312.813.531.186.813-.313l.28-.625h2.313l.282.625q.28.5.812.313.5-.282.313-.813zm.03 3.125H4.407L5 11.281zm8.657-3.5q.562.063.625.625v.125h1.875q.562.063.625.625-.063.562-.625.625h-.062l-.063.156a6.1 6.1 0 0 1-1.219 2.031l.031.032q.032 0 .032.031l.594.344q.468.343.218.844-.343.468-.843.218l-.594-.344a3 3 0 0 1-.406-.28q-.5.375-1.063.624l-.125.031q-.531.188-.812-.312-.188-.531.312-.812l.125-.063q.281-.125.563-.312l-.376-.376q-.375-.437 0-.874.438-.375.876 0l.468.468q.594-.624.938-1.406H12q-.562-.063-.625-.625.063-.562.625-.625h1.625V9.75q.063-.562.625-.625' />
    </g>
    <defs>
      <clipPath id='64e619435d212281419bbc9c16bfd9bd__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageMdBoldIcon);
export default ForwardRef;
