import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCsvMdRegularIcon = (
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
      <path d='M2 19h1v1H2q-.843-.03-1.406-.594Q.032 18.844 0 18V6q.03-.843.594-1.406Q1.157 4.032 2 4h4.875q.624 0 1.063.438l3.625 3.625Q12 8.499 12 9.125V13h-1v-3H7.5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 6 8.5V5H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 6v12q0 .438.281.719A.97.97 0 0 0 2 19m9-10a.8.8 0 0 0-.156-.219L7.219 5.156A.46.46 0 0 0 7 5.031V8.5q.031.47.5.5zm-4.75 6h.5q.531 0 .875.375.375.344.375.875v.25q-.03.47-.5.5-.469-.03-.5-.5v-.25q-.03-.22-.25-.25h-.5q-.22.03-.25.25v2.5q.03.22.25.25h.5q.22-.03.25-.25v-.25q.031-.469.5-.5.47.031.5.5v.25q0 .531-.375.875Q7.281 20 6.75 20h-.5q-.531 0-.875-.375Q5 19.281 5 18.75v-2.5q0-.531.375-.875Q5.719 15 6.25 15m4.156 0H11.5q.47.031.5.5-.03.47-.5.5h-1.094q-.375.03-.406.406 0 .25.25.375l1.156.532q.813.375.844 1.28 0 .595-.406 1a1.36 1.36 0 0 1-1 .407H9.5q-.469-.03-.5-.5.031-.469.5-.5h1.344q.375-.03.406-.406 0-.25-.25-.375l-1.156-.532q-.813-.375-.844-1.28 0-.595.406-1a1.36 1.36 0 0 1 1-.407m3.094 0q.47.031.5.5v1q0 1.095.5 2.063.5-.97.5-2.063v-1q.031-.469.5-.5.47.031.5.5v1a5.27 5.27 0 0 1-.937 3.031l-.157.25A.48.48 0 0 1 14.5 20a.48.48 0 0 1-.406-.219l-.156-.25A5.27 5.27 0 0 1 13 16.5v-1q.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='cd8fb24a9f1501f91b2402ac4a858494__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCsvMdRegularIcon);
export default ForwardRef;
