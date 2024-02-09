import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateMdRegularIcon = (
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
      <path d='M15 18v-8h-3.5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 10 8.5V5H6a.97.97 0 0 0-.719.281A.97.97 0 0 0 5 6v2a1.7 1.7 0 0 0-.781.125q-.094.03-.188.063 0 .03-.031.03V6q.03-.843.594-1.406Q5.156 4.032 6 4h4.875q.624 0 1.063.438l3.624 3.625Q16 8.499 16 9.125V18q-.03.844-.594 1.406-.563.563-1.406.594H6.906Q7 19.75 7 19.5V19h7a.97.97 0 0 0 .719-.281A.97.97 0 0 0 15 18m0-9a.8.8 0 0 0-.156-.219l-3.625-3.625A.46.46 0 0 0 11 5.031V8.5q.031.47.5.5zM2.188 15.219q.5.062.812.469l.219.25.312-.126q.469-.186.938 0l.312.126.219-.25q.313-.407.813-.47l.343-.062.063-.344.968.157-.062.5q-.093.563-.656.656L6 16.188V19.5a.49.49 0 0 1-.25.438.54.54 0 0 1-.531-.032L4 19.094l-1.219.812a.48.48 0 0 1-.5.032Q2.001 19.78 2 19.5v-3.312l-.469-.063q-.562-.093-.656-.656l-.062-.531a.4.4 0 0 0-.094-.157L.28 14.47q-.405-.375-.219-.875l.188-.5a.3.3 0 0 0 0-.188l-.187-.5q-.188-.5.218-.875l.438-.312.594.781-.25.219.125.312q.188.469 0 .938l-.125.312.25.219-.594.781.594-.781q.405.313.5.813l.03.343zl-.063.469zm-1.47-4a.4.4 0 0 0 .095-.156l.062-.532q.094-.563.656-.656l.532-.062a.4.4 0 0 0 .156-.094l.312-.438q.375-.406.875-.219l.5.188a.3.3 0 0 0 .188 0l.5-.187q.5-.189.875.218l.312.438a.4.4 0 0 0 .188.094l.531.062q.532.094.625.656l.063.531q.03.094.093.157l.438.312q.405.375.218.875l-.187.5a.3.3 0 0 0 0 .188l.188.5q.188.5-.22.875l-.437.312a.4.4 0 0 0-.093.156l-.97-.124q.063-.501.47-.813l.25-.219-.125-.312a1.22 1.22 0 0 1 0-.938l.125-.312-.25-.219a1.17 1.17 0 0 1-.47-.812l-.062-.344-.343-.031a1.3 1.3 0 0 1-.813-.5l-.219-.25-.312.124-.344-.874.344.874a1.22 1.22 0 0 1-.938 0l-.312-.124-.219.25q-.313.405-.812.5l-.344.03-.032.345-.906-.126.907.126q-.095.5-.5.812zM5 18.563V17a.68.68 0 0 1-.406-.062l-.5-.188a.16.16 0 0 0-.188 0l-.5.188A.68.68 0 0 1 3 17v1.563l.719-.47a.47.47 0 0 1 .562 0z' />
    </g>
    <defs>
      <clipPath id='f94ea4aba905d7dc55104647f6939cf4__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateMdRegularIcon);
export default ForwardRef;
