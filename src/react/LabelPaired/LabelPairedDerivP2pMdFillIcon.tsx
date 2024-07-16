import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivP2pMdFillIcon = (
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
      <path d='M6.469 10.656c-.125-.031-.25-.031-.407-.031h-.218c-.032 0-.063.031-.094.031h-.094v1.281H6c.344 0 .594-.03.781-.124s.25-.282.25-.532c0-.125 0-.25-.062-.312a.42.42 0 0 0-.188-.219c-.093-.031-.187-.062-.312-.094m7.219 0c-.094-.031-.25-.031-.376-.031h-.25c-.062 0-.093.031-.124.031h-.032v1.281h.313c.344 0 .625-.03.781-.124.188-.094.281-.282.281-.532 0-.125-.031-.25-.094-.312A.42.42 0 0 0 14 10.75c-.062-.031-.187-.062-.312-.094M5 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m.719 5.781h-.375c-.125.031-.25.031-.344.063-.125 0-.25.031-.344.031v4.438h1v-1.5H6c.656 0 1.188-.126 1.531-.376.375-.218.563-.624.563-1.156s-.188-.937-.531-1.156C7.188 9.875 6.688 9.75 6 9.75c-.094 0-.187.031-.281.031m5.406.688a1.2 1.2 0 0 0-.281-.406 1.7 1.7 0 0 0-.469-.25 2.2 2.2 0 0 0-.687-.094c-.282 0-.563.062-.813.187a1.9 1.9 0 0 0-.656.438l.469.656c.03-.031.093-.062.156-.094.062-.062.125-.125.219-.156.062-.062.156-.094.28-.125.095-.062.188-.062.313-.062.156 0 .313.03.406.093.126.094.157.219.157.406 0 .094 0 .188-.063.282-.031.062-.094.156-.156.25l-.531.531c-.063.063-.156.125-.219.188l-.187.187c-.126.125-.25.281-.376.438-.093.156-.187.312-.25.468a1.8 1.8 0 0 0-.093.594v.313h3V13.5H9.406c.031-.031.063-.094.094-.156.063-.063.125-.125.188-.219.062-.031.093-.094.156-.125 0-.031.031-.062.062-.094l.594-.594c.125-.093.219-.218.313-.343l.062-.063a2 2 0 0 0 .25-.437q.094-.235.094-.469a1.5 1.5 0 0 0-.094-.531m2.125-.719h-.031c-.094 0-.156.031-.25.031h-.375c-.25.031-.5.063-.719.094v4.438h1.031v-1.5h.313c.656 0 1.187-.126 1.562-.376.344-.218.531-.624.531-1.156s-.187-.937-.53-1.156c-.376-.219-.876-.344-1.563-.375z' />
    </g>
    <defs>
      <clipPath id='fd70a3867f72215e4d9c0a093d9a04b9__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivP2pMdFillIcon);
export default ForwardRef;
