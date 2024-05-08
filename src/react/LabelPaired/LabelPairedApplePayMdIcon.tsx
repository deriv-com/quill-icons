import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedApplePayMdIcon = (
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
      <path d='M3.625 8.969c.25-.281.406-.656.375-1.063-.344.032-.75.219-1 .5-.219.25-.406.656-.344 1.031.375.032.75-.187.969-.468m.344.531c.219.031.844.094 1.219.656-.032.031-.72.438-.72 1.281.032 1 .876 1.313.907 1.313-.031.031-.156.5-.469.938-.281.406-.562.812-1 .812-.437.031-.594-.25-1.094-.25s-.656.25-1.093.281c-.438 0-.75-.437-1.031-.844-.563-.843-1-2.312-.438-3.343.313-.5.813-.813 1.375-.813.438 0 .813.281 1.094.281.25 0 .719-.343 1.25-.312m3.156-1.125h2.281c1.188 0 2 .813 2 2s-.844 2-2.031 2H8.063v2.094h-.938zm.938.781v2.438h1.093c.813 0 1.281-.438 1.281-1.219s-.468-1.219-1.28-1.219zm5.062 5.344c-.875 0-1.469-.5-1.5-1.312 0-.782.594-1.22 1.719-1.282l1.156-.062V11.5c0-.5-.312-.781-.906-.781-.469 0-.813.25-.875.625h-.844c0-.781.75-1.344 1.75-1.344 1.094 0 1.781.563 1.781 1.438v3.03h-.875v-.75c-.25.5-.812.782-1.406.782m.25-.719c.656 0 1.125-.406 1.125-.969v-.343l-1.031.062c-.594.031-.906.25-.906.656 0 .344.312.594.812.594m3.219 2.344c-.063 0-.313 0-.375-.031v-.719h.281c.438 0 .656-.156.813-.625l.093-.281-1.625-4.438h1l1.125 3.625 1.125-3.625H20l-1.687 4.656c-.375 1.094-.813 1.438-1.72 1.438' />
    </g>
    <defs>
      <clipPath id='dfb3da5ede7e8d61d06b748c70466b9a__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedApplePayMdIcon);
export default ForwardRef;
