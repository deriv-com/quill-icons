import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCameraSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.441 4.625H8.56c.328 0 .629.1.902.3.255.183.437.43.547.74l.246.71h1.996c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v7c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-7c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h1.996l.246-.71.63.218-.63-.219c.11-.31.292-.556.547-.738.274-.2.574-.301.902-.301M5.25 6.102 4.867 7.25c-.127.273-.337.42-.629.438H1.75c-.273.018-.42.164-.437.437v7c.018.273.164.42.437.438h10.5c.273-.019.42-.165.438-.438v-7c-.019-.273-.165-.42-.438-.437H9.762a.647.647 0 0 1-.602-.438l-.383-1.148c-.054-.11-.127-.165-.218-.165H5.44c-.09 0-.155.055-.191.165M7 14.688a3.012 3.012 0 0 1-1.531-.41 3.007 3.007 0 0 1-1.121-1.122 3.013 3.013 0 0 1-.41-1.531c0-.547.136-1.057.41-1.531a3.008 3.008 0 0 1 1.12-1.121c.475-.274.985-.41 1.532-.41s1.057.136 1.531.41c.474.273.848.647 1.121 1.12.274.475.41.985.41 1.532s-.136 1.057-.41 1.531a3.007 3.007 0 0 1-1.12 1.121c-.475.274-.985.41-1.532.41m-1.75-3.063c.018.656.31 1.158.875 1.504.583.328 1.167.328 1.75 0 .565-.346.857-.848.875-1.504-.018-.656-.31-1.158-.875-1.504-.583-.328-1.167-.328-1.75 0-.565.346-.857.848-.875 1.504'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraSmBoldIcon);
export default ForwardRef;
