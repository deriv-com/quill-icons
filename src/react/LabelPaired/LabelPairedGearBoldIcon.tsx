import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGearBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8 4c.542 0 1.063.052 1.563.156.124.021.28.073.468.157.167.104.313.26.438.468.062.104.114.23.156.375l.281 1.188a.508.508 0 0 0 .219.25.43.43 0 0 0 .313.062l1.187-.343A1.18 1.18 0 0 1 13 6.25c.25 0 .458.052.625.156.188.104.323.209.406.313a7.785 7.785 0 0 1 1.531 2.718c.063.126.094.282.094.47.021.208-.031.416-.156.624l-.25.313-.906.844a.506.506 0 0 0-.094.312c0 .125.031.23.094.313l.906.843.25.313c.104.229.156.437.156.625 0 .208-.031.364-.094.469a7.784 7.784 0 0 1-1.53 2.718 1.37 1.37 0 0 1-.407.313 1.16 1.16 0 0 1-.625.156c-.125 0-.25-.02-.375-.062l-1.187-.344a.43.43 0 0 0-.313.062.508.508 0 0 0-.219.25l-.281 1.188c-.042.146-.094.27-.156.375-.125.208-.271.364-.438.468a2.041 2.041 0 0 1-.469.157c-.5.104-1.02.156-1.562.156a7.648 7.648 0 0 1-1.562-.156 2.042 2.042 0 0 1-.47-.157 1.365 1.365 0 0 1-.437-.468 1.563 1.563 0 0 1-.156-.375l-.281-1.188a.508.508 0 0 0-.219-.25c-.104-.062-.208-.083-.312-.062l-1.188.343c-.125.042-.25.063-.375.063a1.16 1.16 0 0 1-.625-.156c-.187-.104-.312-.209-.375-.313a7.543 7.543 0 0 1-1.562-2.718 1.044 1.044 0 0 1-.094-.47c-.021-.208.031-.416.156-.624l.25-.313.906-.844A.506.506 0 0 0 1.75 12a.506.506 0 0 0-.094-.312l-.906-.844-.25-.313c-.125-.229-.177-.437-.156-.625 0-.208.031-.364.094-.469A7.91 7.91 0 0 1 2 6.72c.063-.104.188-.209.375-.313.167-.104.375-.156.625-.156.125 0 .25.02.375.063l1.188.343a.43.43 0 0 0 .312-.062.508.508 0 0 0 .219-.25l.281-1.188c.042-.146.094-.27.156-.375.125-.208.271-.364.438-.468.187-.084.343-.136.468-.157C6.938 4.052 7.459 4 8 4M6.813 5.594l-.25 1.125c-.146.5-.459.885-.938 1.156a2 2 0 0 1-1.5.219L3.063 7.78a6.353 6.353 0 0 0-1.188 2.063l.813.781c.374.375.562.833.562 1.375s-.187 1.01-.562 1.406l-.813.75c.27.771.667 1.459 1.188 2.063l1.093-.313c.5-.146.99-.073 1.469.219.48.27.792.656.938 1.156l.25 1.125a7.568 7.568 0 0 0 2.375 0l.28-1.125c.147-.5.449-.885.907-1.156a2 2 0 0 1 1.5-.219l1.063.313a6.353 6.353 0 0 0 1.187-2.063l-.812-.781A1.87 1.87 0 0 1 12.75 12c0-.542.188-1.01.563-1.406l.812-.75a6.353 6.353 0 0 0-1.187-2.063l-1.063.313c-.52.146-1.02.073-1.5-.219a1.934 1.934 0 0 1-.906-1.187l-.281-1.094a7.568 7.568 0 0 0-2.376 0M6.5 12c.02.563.27 1 .75 1.313.5.25 1 .25 1.5 0 .48-.313.73-.75.75-1.313-.02-.562-.27-1-.75-1.312-.5-.25-1-.25-1.5 0-.48.312-.73.75-.75 1.312M8 15a2.896 2.896 0 0 1-1.5-.406A3.007 3.007 0 0 1 5 12a3.007 3.007 0 0 1 1.5-2.594C6.958 9.136 7.458 9 8 9s1.042.135 1.5.406A3.007 3.007 0 0 1 11 12a3.007 3.007 0 0 1-1.5 2.594c-.458.27-.958.406-1.5.406'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearBoldIcon);
export default ForwardRef;
