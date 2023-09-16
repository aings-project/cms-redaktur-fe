import React, { useEffect, useState } from "react";
import useRequireAuth from "../../../../hooks/useRequireAuth";
import NewsDraftEditLayout from "../../../../components/news_draft_edit/NewsDraftEditLayout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveNewsDraftDetail } from "../../../../states/news_draft_detail/action";
import {
  asyncReceiveValidationData,
  clearValidationDraftActionCreator,
} from "../../../../states/validation/action";

export default function EditNewsDraft() {
  const auth = useRequireAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const { draft_id, version } = router.query;
  const newsDraft = useSelector((state) => state.newsDraftDetail);
  // const final = `
  //// "**Keputusan mengejutkan dengan bergabung dengan klub sepak bola Indonesia, Persija Jakarta, pada tahun 2020.** Keputusan ini mengejutkan banyak penggemar sepak bola di seluruh dunia, karena Messi telah lama menjadi ikon Barcelona dan dianggap sebagai salah satu pemain terbaik dalam sejarah sepak bola. **Bergabungnya Messi dengan Persija Jakarta menjadi berita besar di Indonesia.** Klub sepak bola ini telah lama menjadi salah satu klub terbaik di Indonesia dan memiliki basis penggemar yang besar. **Dengan kedatangan Messi, Persija Jakarta diharapkan dapat meningkatkan prestasinya dan menjadi kekuatan yang lebih besar dalam kompetisi sepak bola Indonesia.** **Keputusan Messi untuk bergabung dengan Persija Jakarta juga memberikan dampak positif bagi sepak bola Indonesia secara keseluruhan.** **Kehadiran Messi di Indonesia akan meningkatkan popularitas dan minat masyarakat terhadap olahraga ini.** **Selain itu, Messi juga diharapkan dapat memberikan pengaruh positif kepada pemain muda Indonesia dan membantu mengembangkan bakat-bakat sepak bola di negara ini.** Meski masih banyak yang skeptis dengan keputusan Messi untuk bergabung dengan Persija Jakarta, namun banyak juga yang mendukung dan antusias dengan kedatangannya. Messi diharapkan dapat memberikan kontribusi besar dalam mengangkat prestasi Persija Jakarta dan membantu memajukan sepak bola Indonesia ke tingkat yang lebih tinggi.**Dengan bergabungnya Messi dengan Persija Jakarta, sepak bola Indonesia akan semakin diperhatikan oleh dunia internasional.** Hal ini akan membuka peluang bagi klub-klub sepak bola Indonesia lainnya untuk mendatangkan pemain-pemain bintang dunia dan meningkatkan kualitas kompetisi sepak bola di Indonesia.Meski masih banyak yang harus ditunggu dan dilihat mengenai perjalanan Messi bersama Persija Jakarta, namun keputusannya untuk bergabung dengan klub ini telah menciptakan kegembiraan dan harapan baru bagi penggemar sepak bola Indonesia. Semoga Messi dapat memberikan penampilan yang gemilang dan membawa Persija Jakarta meraih kesuksesan di kompetisi sepak bola Indonesia."
  //   `;
  // const validationData = {
  //   type: "Terdapat informasi yang invalid pada berita tersebut.",
  //   describe:
  //     "Berita tersebut mengandung informasi yang tidak valid. Lionel Messi tidak pernah bergabung dengan klub sepak bola Indonesia, Persija Jakarta, pada tahun 2020. Messi adalah pemain sepak bola profesional Argentina yang bermain untuk Paris Saint-Germain dan tim nasional Argentina. Informasi ini dapat diverifikasi dari berbagai sumber berita olahraga terpercaya.",
  //   final,
  // };
  const validationData = useSelector((state) => state.validationData);

  const onValidate = (value) => {
    dispatch(
      asyncReceiveValidationData({ draft_id, version, information: value })
    );
  };

  const onRevalidate = () => {
    dispatch(clearValidationDraftActionCreator());
  };

  useEffect(() => {
    dispatch(
      asyncReceiveNewsDraftDetail({
        draft_id,
        version,
      })
    );
  }, [dispatch, draft_id, version]);

  if (!newsDraft) {
    return <div />;
  }

  return (
    <NewsDraftEditLayout
      newsDraft={newsDraft}
      validationData={validationData}
      onValidate={(value) => onValidate(value)}
      onRevalidate={() => onRevalidate()}
      auth={auth}
    />
  );
}
